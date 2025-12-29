import { useState, useRef } from 'react';
import { trpc } from '@/lib/trpc';
import { Button } from '@/components/ui/button';
import { Upload, Download, Trash2, File, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

export default function FileManager() {
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const utils = trpc.useUtils();
  const { data: files = [], isLoading } = trpc.files.list.useQuery();
  const uploadMutation = trpc.files.upload.useMutation({
    onSuccess: () => {
      utils.files.list.invalidate();
      toast.success('Arquivo enviado com sucesso!');
      setIsUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    },
    onError: (error) => {
      toast.error('Erro ao enviar arquivo: ' + error.message);
      setIsUploading(false);
    },
  });
  
  const deleteMutation = trpc.files.delete.useMutation({
    onSuccess: () => {
      utils.files.list.invalidate();
      toast.success('Arquivo deletado com sucesso!');
    },
    onError: (error) => {
      toast.error('Erro ao deletar arquivo: ' + error.message);
    },
  });

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    
    try {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const data = e.target?.result as string;
        const base64Data = data.split(',')[1];
        
        await uploadMutation.mutateAsync({
          filename: file.name,
          mimeType: file.type,
          data: base64Data,
        });
      };
      reader.readAsDataURL(file);
    } catch (error) {
      toast.error('Erro ao processar arquivo');
      setIsUploading(false);
    }
  };

  const handleDelete = (fileId: number) => {
    if (confirm('Tem certeza que deseja deletar este arquivo?')) {
      deleteMutation.mutate({ fileId });
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-charcoal mb-4">Gerenciador de Arquivos</h3>
        
        {/* Upload Area */}
        <div className="mb-6">
          <input
            ref={fileInputRef}
            type="file"
            onChange={handleFileSelect}
            disabled={isUploading}
            className="hidden"
          />
          <Button
            onClick={() => fileInputRef.current?.click()}
            disabled={isUploading}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center gap-2"
          >
            {isUploading ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                <Upload size={18} />
                Enviar Arquivo
              </>
            )}
          </Button>
        </div>

        {/* Files List */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 mb-3">Meus Arquivos</h4>
          
          {isLoading ? (
            <div className="flex items-center justify-center py-8">
              <Loader2 size={24} className="animate-spin text-orange-500" />
            </div>
          ) : files.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <File size={32} className="mx-auto mb-2 opacity-50" />
              <p>Nenhum arquivo enviado ainda</p>
            </div>
          ) : (
            <div className="space-y-2">
              {files.map((file) => (
                <div
                  key={file.id}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <File size={20} className="text-orange-500 flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-charcoal truncate">
                        {file.filename}
                      </p>
                      <p className="text-xs text-gray-600">
                        {formatFileSize(file.size || 0)} • {formatDate(file.uploadedAt)}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <a
                      href={file.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-600 hover:text-orange-500 transition-colors"
                      title="Download"
                    >
                      <Download size={18} />
                    </a>
                    <button
                      onClick={() => handleDelete(file.id)}
                      disabled={deleteMutation.isPending}
                      className="p-2 text-gray-600 hover:text-red-500 transition-colors disabled:opacity-50"
                      title="Deletar"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
