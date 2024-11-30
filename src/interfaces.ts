export default interface Header_Section {
    headerName?: string;
    sectionName?: string;
}

export interface Modal {
    isOpen: boolean;
    onClose: () => void;
  }