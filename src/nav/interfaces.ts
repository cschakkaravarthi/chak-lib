import { SelectCallback } from 'react-bootstrap/helpers';

export interface NavItem {
  key: number;
  isActive?: boolean;
  Link: React.ElementType;
}

export interface BreadcrumbProps {
  key?: number;
  items: NavItem[];
  className?: string;
  onSelect?: SelectCallback;
}

export interface NavProps {
  key?: number;
  variant?: string;
  items: NavItem[];
  className?: string;
  isFetching?: boolean;
  sectionIcon?: string;
  sectionTitle?: string;
  editLink?: React.ElementType;
  sectionLink?: React.ElementType;
}

export interface NavOverlayProps {
  show: boolean;
  editMode: boolean;
  navGroups: NavProps[];
  handleAdd: () => void;
  handleEdit: () => void;
  setShow: (show: boolean) => void;
}
