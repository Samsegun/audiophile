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

// export function checkIdName(id: string | undefined = "") {
//     if (id === "speakers") {
//         return "speaker";
//     }

//     return id;
// }

// export function splitProductName(productName: string, categoryName: string) {
//     let newCategoryName;

//     if (productName[productName.length - 1] === "s") {
//         newCategoryName = categoryName;
//     } else {
//         newCategoryName = "speaker";
//     }

//     const splittedName = productName.toLowerCase().split(newCategoryName);

//     return splittedName[0];
// }

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
