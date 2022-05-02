export const topCard = (arr) =>{
    const arrName = arr.map(element=> element.name.split(" ")).flat().reduce((item,element)=> {
        item[element] = (item[element] || 0) + 1;
        return item;
    },{});
    const newArr = [];

    const [ topWord ] = Object.entries(arrName).sort(([,a],[,b])=> b - a)[0];

    const result = arr.filter(element => {
        const bool = element.name.split(" ").includes(topWord);
        if(bool){
            return element;
        }else{
            newArr.push(element);
        }
    });

    return [...result, ...newArr];
};