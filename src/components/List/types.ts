export type ListItemType = {
  id: string;
  name: string;
  description: string;
  category?: string;
  onEdit: () => void;
  onDelete: () => void;
}
