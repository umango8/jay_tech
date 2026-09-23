export interface FormField {
  label: string;
  type: string;
  required: boolean;
  maxLength?: number;
}

export const quoteData = {
  label: "Request a Quote",
  title: "Bring us your manufacturing requirement.",
  copy: "Share your requirement or drawing. We’ll review the details and respond to discuss the right engineering approach.",
  fileHelper: "Drawing and file attachments are welcome.",
  acceptedFiles: ".pdf,.dwg,.dxf,.step,.stp,.jpg,.jpeg,.png",
  fields: [
    { label: "Name", type: "text", required: true, maxLength: 100 },
    { label: "Company", type: "text", required: false, maxLength: 100 },
    { label: "Phone", type: "tel", required: true, maxLength: 100 },
    { label: "Email", type: "email", required: true, maxLength: 100 },
    { label: "Requirement", type: "text", required: true, maxLength: 200 },
  ] as FormField[],
};
