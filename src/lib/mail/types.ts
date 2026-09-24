export interface QuoteFormData {
  name: string;
  company?: string;
  phone: string;
  email: string;
  requirement: string;
  message?: string;
  file?: {
    filename: string;
    content: Buffer;
    contentType: string;
    size: number;
  };
}

export interface SendMailResult {
  success: boolean;
  adminSent?: boolean;
  clientSent?: boolean;
  error?: string;
}
