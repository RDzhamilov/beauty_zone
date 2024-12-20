import { InfoBlock } from "@/components/shared";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center mt-40">
      <InfoBlock
        title="Страница не найдена"
        text="Извините, но запрашиваемая вами страница не существует. Проверьте URL или вернитесь на главную страницу."
      />
    </div>
  );
}
