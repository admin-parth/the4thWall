interface val {
    name?:string | undefined;
    path?:string;
    label?:string;
    icon?:string;
    children?:value[]
    section?:section[];
    section2?:section2[];
 }
 interface title{
    title:string;
    icon?:string
    magamenu?:boolean
    right?:boolean
    children:val[] | undefined,
    path?:string
    name?:string | undefined,
}
 interface value{
    name:string;
    path?:string;
    children?:valueof[]
    icon?:string;
 }
 interface type{
    name?:string;
    path?:string;
    icon?:string;
 }
 
interface valueof{
    name:string;
    path:string;
    icon?:string
}
interface section{
    name:string;
    children?:vale[];
}
interface section2{
    name?:string;
    children:item[];
    
}
interface valueof{
    name:string;
   path:string;
   icon?:string

}
interface vale{
    name?:string;
    path?:string;
    label?:string
}
interface item{
    name:string;
    path:string;
    icon?:string;
}
 const navlink:title[] = [
    {
        title: 'Home',
        magamenu:false,
        right:false,
        name: 'Home',
        path: '#home',
        children: undefined
    },
    {
        title:'Gallery',
        magamenu:false,
        right:true,
        name:'Gallery',
        path:'#gallery',
        children: undefined
    },
    {
        title:'Design Process',
        magamenu:false,
        right:true,
        name:'About us',
        path:'#design-process',
        children: undefined
    },
    // {
    //     title:'About us',
    //     magamenu:false,
    //     right:true,
    //     name:'About us',
    //     path:'#about-us',
    //     children: undefined
    // },
    // {
    //     title:'Contact',
    //     magamenu:false,
    //     right:true,
    //     name:'Contect us',
    //     path:'#contact',
    //     children: undefined
    // }
];

export default navlink
