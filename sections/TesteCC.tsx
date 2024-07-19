
import { ImageWidget } from 'apps/admin/widgets.ts';

interface ProductCardProps {
  /**
   * @format rich-text
   */
  title?: string;
  /**
   * @format textarea
   */
  description?: string;
  /**
   * @widget ImageWidget
   */
  image?: ImageWidget;
  /**
   * @format color-input
   */
  backgroundColor?: string;
  /**
   * @format color-input
   */
  textColor?: string;
  /**
   * @format color-input
   */
  buttonColor?: string;
  /**
   * @format rich-text
   */
  buttonText?: string;
}

export default function ProductCard({
  title = "Product Title",
  description = "Product description goes here.",
  image = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
  backgroundColor = "#ffffff",
  textColor = "#333333",
  buttonColor = "#4f46e5",
  buttonText = "Buy Now",
}: ProductCardProps) {
  return (
    <div
      class="bg-[backgroundColor] text-[textColor] p-6 rounded-lg"
      style={{ backgroundColor, color: textColor }}
    >
      <img src={image} alt={title} class="w-full mb-4 rounded-lg" />
      <h3 class="text-xl font-bold mb-2">{title}</h3>
      <p class="mb-4">{description}</p>
      <button
        class="bg-[buttonColor] text-white rounded-md px-4 py-2"
        style={{ backgroundColor: buttonColor }}
      >
        {buttonText}
      </button>
    </div>
  );
}
