let currentOrder = []; // 儲存目前訂單的商品
        const itemsDisplay = document.getElementById('items-display');
        const orderList = document.getElementById('order-list');
        const totalPriceSpan = document.getElementById('total-price');

        // 顯示指定類別的商品
        function showCategory(category) {
            itemsDisplay.innerHTML = ''; // 清空現有商品
            const items = menuData[category];

            items.forEach(item => {
                const itemCard = document.createElement('div');
                itemCard.classList.add('item-card');
                itemCard.innerHTML = `
                    <h3>${item.name}</h3>
                    <p>NT$ ${item.price.toFixed(2)}</p>
                `;
                itemCard.onclick = () => addItemToOrder(item);
                itemsDisplay.appendChild(itemCard);
            });
        }

        // 將商品加入訂單
        function addItemToOrder(item) {
            currentOrder.push(item);
            renderOrder();
        }

        // 渲染訂單列表並更新總價
        function renderOrder() {
            orderList.innerHTML = '';
            let total = 0;

            currentOrder.forEach((item, index) => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <span>${item.name}</span>
                    <span>NT$ ${item.price.toFixed(2)}</span>
                `;
                orderList.appendChild(li);
                total += item.price;
            });

            totalPriceSpan.textContent = total.toFixed(2);
        }

        // 初始化顯示甜點類別
        document.addEventListener('DOMContentLoaded', () => {
            showCategory('desserts');
        });
