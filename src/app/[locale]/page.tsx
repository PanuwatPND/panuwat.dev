import { getIntl } from "../../lib/intl";

const HomeContent = async ({ params }: { params: { locale: string } }) => {
  const { locale } = params;
  const intl = await getIntl(locale);

  return (
    <div>
      <main>
        <h1>{intl.formatMessage({ id: "page.title" })}</h1>

        <p>{intl.formatMessage({ id: "page.description" })}</p>
      </main>
    </div>
  );
};

const HomePage = HomeContent;

export default HomePage;
