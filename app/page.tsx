import fetchAllProperties from "@/actions/fetchAllProperties";
import ShowProperties, { PropertiesProps } from "@/components/ShowProperties";

export default async function Home() {
    const properties = (await fetchAllProperties()) as PropertiesProps[];

    return <ShowProperties data={JSON.stringify(properties)} />;
}
