import Container from "@/components/UI/Container/Container";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations('Home');
  return (
    <div>
      <Container>
        <h1 className="font-bold text-[50px]">{t('title')}</h1>
        <div>
          {t('body')}
        </div>
      </Container>
    </div>
  );
}
