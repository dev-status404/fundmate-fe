declare module 'admin/Button' {
  import { ButtonProps } from 'react';
  const Button: React.FC<ButtonProps>;
  export { Button };
}

declare module 'html2pdf.js' {
  interface Html2PdfOptions {
    margin?: number | number[];
    filename?: string;
    image?: { type: string; quality: number };
    html2canvas?: { scale: number; useCORS: boolean };
    jsPDF?: { unit: string; format: string; orientation: string };
  }

  interface Html2Pdf {
    output(
      type: 'blob' | 'datauristring' | 'arraybuffer',
    ): Promise<Blob | string | ArrayBuffer>;
    from(element: HTMLElement): this;
    set(options: Html2PdfOptions): this;
    toPdf(): this;
    get(
      type: 'blob' | 'datauristring' | 'arraybuffer',
    ): Promise<Blob | string | ArrayBuffer>;
    save(filename?: string): void;
  }

  function html2pdf(): Html2Pdf;

  export default html2pdf;
}
