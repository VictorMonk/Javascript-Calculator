document.addEventListener('DOMContentLoaded', function () {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            screen.value += button.textContent;
        });
    });

    if (clear) {
        clear.addEventListener('click', function () {
            screen.value = '';
        });
    }

    if (equal) {
        equal.addEventListener('click', function () {
            try {
                let expression = screen.value;

                // Remove '=' sign if it's present at the end
                if (expression.endsWith('=')) {
                    expression = expression.slice(0, -1);
                }

                console.log('Expression:', expression);

                const result = math.evaluate(expression);
                console.log('Result:', result);

                screen.value = result.toString();
            } catch (error) {
                console.error('Error:', error.message);
                screen.value = 'Error';
            }
        });
    }
});
