/**
 * Service icon mapping – maps client.config services[].icon string to Lucide icons.
 * All icon names: heat, shower, emergency, wrench, home, electric,
 * paint, clean, build, tree, lock, ventilation, cooling, fire.
 */

import {
  Sun,
  ShowerHead,
  AlertTriangle,
  Wrench,
  Home,
  Zap,
  Paintbrush,
  SprayCan,
  HardHat,
  TreePine,
  Lock,
  Fan,
  Snowflake,
  Flame,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  heat: Sun,
  shower: ShowerHead,
  emergency: AlertTriangle,
  wrench: Wrench,
  home: Home,
  electric: Zap,
  paint: Paintbrush,
  clean: SprayCan,
  build: HardHat,
  tree: TreePine,
  lock: Lock,
  ventilation: Fan,
  cooling: Snowflake,
  fire: Flame,
};

export function ServiceIcon({ name }: { name: string }) {
  const Icon = iconMap[name] ?? Wrench;
  return <Icon className="h-7 w-7" strokeWidth={1.5} />;
}
