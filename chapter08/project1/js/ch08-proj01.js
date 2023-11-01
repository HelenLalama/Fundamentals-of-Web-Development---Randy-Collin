
const tax_rate = prompt('Enter tax rate (0.10)');
const shipping_threshold = prompt('Enter shipping threshold (1000)');

/* add loop and other code here ... in this simple exercise we are not
   going to concern ourselves with minimizing globals, etc */

let subtotal = 0;
for (let i = 0; i < cart.length; i++) {
   const item = cart[i];
   const total = calculateTotal(item.quantity, item.product.price);
   outputCartRow(item, total);
   subtotal += total;
}

const tax = subtotal * tax_rate;
const shipping = subtotal >= shipping_threshold ? 0 : 40;
const grand_total = subtotal + tax + shipping;

document.write(`
<tr class="totals">
<td  colspan="4">Subtotal</td>
<td>$` + subtotal.toFixed(2) + `</td>
</tr>
`);

document.write(`
<tr class="totals">
<td  colspan="4">Tax</td>
<td>$` + tax.toFixed(2) + `</td>
</tr>
`);

document.write(`
<tr class="totals">
<td  colspan="4">Shipping</td>
<td>$` + shipping.toFixed(2) + `</td>
</tr>
`);

document.write(`
<tr class="totals">
<td class="focus" colspan="4">Grand Total</td>>
<td class="focus">$` + grand_total.toFixed(2) + `</td>
</tr>
`);
