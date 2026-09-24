export interface FormField {
  label: string;
  name: string;
  placeholder?: string;
  type: string;
  required: boolean;
  maxLength?: number;
}

export const quoteData = {
  label: "Request a Quote",
  title: "Bring us your manufacturing requirement.",
  copy: "Share your requirement or drawing. We’ll review the details and respond to discuss the right engineering approach.",
  fileHelper: "Drawing and file attachments are welcome.",
  acceptedFiles: ".pdf,.dwg,.dxf,.step,.stp,.jpg,.jpeg,.png,.webp",
  messagePlaceholder: "Describe your project specifications, material grade, quantity, tolerance, or timeline...",
  fields: [
    {
      label: "Name",
      name: "name",
      placeholder: "e.g. Rajesh Patel",
      type: "text",
      required: true,
      maxLength: 100,
    },
    {
      label: "Company",
      name: "company",
      placeholder: "e.g. Acme Precision Tech Ltd.",
      type: "text",
      required: false,
      maxLength: 100,
    },
    {
      label: "Phone",
      name: "phone",
      placeholder: "e.g. +91 98765 43210",
      type: "tel",
      required: true,
      maxLength: 100,
    },
    {
      label: "Email",
      name: "email",
      placeholder: "e.g. rajesh@acmeprecision.com",
      type: "email",
      required: true,
      maxLength: 100,
    },
    {
      label: "Requirement",
      name: "requirement",
      placeholder: "e.g. CNC Machining / Injection Mould Die",
      type: "text",
      required: true,
      maxLength: 200,
    },
  ] as FormField[],
};

