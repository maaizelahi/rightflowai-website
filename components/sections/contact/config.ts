import { ContactField } from "./types";

export const contactFields: ContactField[] = [
  {
    name: "name",
    label: "Name",
    type: "text",
    placeholder: "Your full name",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "your@email.com",
  },
  {
    name: "phone",
    label: "Phone Number",
    type: "tel",
    placeholder: "+1 (555) 000-0000",
  },
  {
    name: "company",
    label: "Company Name",
    type: "text",
    placeholder: "Your company name",
  },
  {
    name: "businessType",
    label: "Business Type",
    type: "text",
    placeholder: "e.g., Coach, Consultant, Course Creator",
  },
  {
    name: "challenge",
    label: "What would you like to automate?",
    type: "textarea",
    placeholder: "Describe the tasks or processes you'd like to automate...",
  },
  {
    name: "preferredContact",
    label: "Preferred Contact Method",
    type: "select",
    placeholder: "How should we contact you?",
    options: [
      { value: "email", label: "Email" },
      { value: "phone", label: "Phone" },
    ],
  },
];