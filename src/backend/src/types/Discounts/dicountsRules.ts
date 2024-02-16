type DiscountsRules = {
    id: string;
    description: string;
    code: string;
    type: string;
    value: number;
    minQuantity: number;
    productNameOrTag: string;
}

export default DiscountsRules;
