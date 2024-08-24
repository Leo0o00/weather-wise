import cities from "@/lib/city.list.json";
import CityData from "@/interfaces/city";



function searchMaxLength() {
    const Cities = cities as CityData[];
    const length: number = Cities.length;
    let greaterNameLength: number = 0, city: object = {};

    for (let i: number = 0; i < length - 1; i++){
        if (greaterNameLength < Cities[i].name.length) {
            greaterNameLength = Cities[i].name.length;
            city = Cities[i];
        }
    }
    return greaterNameLength;
}

export default searchMaxLength;