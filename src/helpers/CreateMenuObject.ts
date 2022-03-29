type MenuOptions = '' | 'all' | 'fantasy' | 'fiction' | 'literature';

export const createMenuObject = (activeMenu: MenuOptions) => {
    let returnObject = {
        all: false,
        fantasy: false,
        fiction: false,
        literature: false
    };

    if(activeMenu !== '' ){
        returnObject[activeMenu] = true;
    }

    returnObject;
}