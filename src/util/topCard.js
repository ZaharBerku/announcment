export const topCard = (arr) => {
    const arrName = arr.map(element => {
        const { name, description } = element;

        return `${name.split(" ")} ${description.split(" ")}`.replace(/[^a-zа-яё\s]/gi, " ");

    }).join(" ").split(" ").reduce((item, element) => {
            if(element !== ""){
                item[element] = (item[element] || 0) + 1;
            }
            return item;
        }, {});
    
    const newArr = [];

    const [topWord] = Object.entries(arrName).sort(([, a], [, b]) => b - a)[0];

    const result = arr.filter(element => {
        const { name, description } = element;
        const bool = name.split(" ").includes(topWord) || description.split(" ").includes(topWord);
        if (bool) {
            return element;
        } else {
            newArr.push(element);
        }
    });
  
    return [...result, ...newArr];
};