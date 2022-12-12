import { NavigateFunction } from "react-router-dom";
import appData from "../data.json";

export function filterAndOrderData(id: string | undefined = "") {
    const categoryData = appData.filter(data => data.category === id);

    // arrange categoryData in terms of new product status
    const newCategoryData = categoryData.filter(category => category.new);
    const orderedCategoryData = newCategoryData.concat(
        categoryData.filter(category => !category.new)
    );

    return orderedCategoryData;
}

export function splitName(productName: string) {
    let nameArray = productName.split(" ");

    let line1 = productName.split(" ", nameArray.length - 1);

    let line2 = nameArray[nameArray.length - 1];

    let firstLine = line1.join(" ");

    return { firstLine, secondLine: line2 };
}

export function splitParagraph(text: string) {
    let textArray = text.split("\n\n");

    let textOne = textArray[0];
    let textTwo = textArray[1];

    return { textOne, textTwo };
}

export function findSingleProduct(id: string | undefined = "") {
    const product = appData.filter(data => data.slug === id);

    return product;
}

export function getProductNameOnly(name: string) {
    if (name.includes("Headphones")) {
        let splitName = name.split("Headphones");

        return splitName.join(" ");
    }

    let splitName = name.split(" ");

    return splitName[0];
}

export function navigateOtherProducts(
    slug: string,
    navigate: NavigateFunction
) {
    const product = appData.find(data => data.slug === slug);

    navigate(`/category/${product?.category}/${product?.slug}`);
}
