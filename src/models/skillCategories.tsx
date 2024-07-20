import { ToolsProps } from "./tools";

export interface SkillTabProps {
  item: ToolsProps;
  isSelected: boolean;
  onClick: () => void;
}
