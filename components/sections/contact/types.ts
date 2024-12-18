export interface ContactField {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea" | "select";
  placeholder: string;
  options?: Array<{
    value: string;
    label: string;
  }>;
}