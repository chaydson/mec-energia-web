import theme from "@/theme";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  BarElement,
  BarController,
  LineController,
  Title,
  defaults,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  ArcElement,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  BarController,
  LineController,
  Title,
  Tooltip,
  Legend
);

defaults.font.family = theme.typography.fontFamily
defaults.font.weight = 'normal'
defaults.color = '#000'
defaults.plugins.title.font = {
  weight: 'normal',
}
