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

export function checkIdName(id: string | undefined = "") {
    if (id === "speakers") {
        return "speaker";
    }

    return id;
}

export function splitProductName(productName: string, categoryName: string) {
    let newCategoryName;

    if (productName[productName.length - 1] === "s") {
        newCategoryName = categoryName;
    } else {
        newCategoryName = "speaker";
    }

    const splittedName = productName.toLowerCase().split(newCategoryName);

    return splittedName[0];
}
