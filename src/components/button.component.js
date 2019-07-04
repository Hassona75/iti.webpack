import './button.component.scss'
export default ()=> {
//export const button = ()=> {
const _button = document.createElement('button');
    _button.textContent = 'Click Me!';
    _button.classList.add('btn-primary');
    _button.classList.add('bold');
    _button.onclick = ()=>{
        System.import('./users/users').then(m=>{
            console.log(m);
        })
    };
    document.body.appendChild(_button);
};
