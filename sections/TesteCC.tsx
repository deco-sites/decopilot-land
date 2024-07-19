import { useSection } from "deco/hooks/useSection.ts";
import type { AppContext } from "../apps/site.ts";

interface Props {
  initialTitle?: string;
}

export async function action(
  props: Props,
  req: Request,
  ctx: AppContext
): Promise<Props> {
  return { initialTitle: "Hello" };
}

export function loader(props: Props) {
  return props;
}

export default function HelloSection({
  initialTitle = "",
}: Props) {

  const generateSectionUrl = (props: Props, otherProps: { href?: string } = {}) => {
    const sectionProps = {
      ...otherProps,
      props,
    };
    return useSection(sectionProps);
  };

  return (
    <section>
      <div class="container mx-auto py-12">
        <h2 class="text-3xl font-bold mb-4">{initialTitle}</h2>
        <button
          type="button"
          class="btn btn-primary"
          hx-get={`${generateSectionUrl({ initialTitle: "Hello" })}`}
          hx-target="closest section"
          hx-swap="innerHTML"
        >
          Click me
        </button>
      </div>
    </section>
  );
}