
import { on_line_shop } from './database'


export async function getProducts(): Promise<any> {
    const [result] = await on_line_shop.execute('select * from products');
    return result
}

export async function getProductsbysort(): Promise<any> {
    const [result] = await on_line_shop.execute('select * from products order by qty');
    return result
}



export async function updateProduct(id: number, qty: number): Promise<any> {
    const [result] = await on_line_shop.execute('UPDATE products SET qty=?  WHERE id = ?', [qty, id]);
    console.log({ products: result })
    return result
}

export async function getProductsByName(name: string): Promise<any> {
    const [result] = await on_line_shop.execute('select * from products where name=?', [name]);
    return result
}


