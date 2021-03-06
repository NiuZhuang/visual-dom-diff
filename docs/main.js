import { visualDomDiff } from '../lib'

window.addEventListener('load', () => {
    const ignoreCaseCheckbox = document.getElementById('ignore-case')
    const input1Html = document.getElementById('input1-html')
    const input1 = document.getElementById('input1')
    const input2Html = document.getElementById('input2-html')
    const input2 = document.getElementById('input2')
    const outputHtml = document.getElementById('output-html')
    const output = document.getElementById('output')
    const updateInput1 = () => {
        input1.firstChild.innerHTML = input1Html.value
    }
    const updateInput2 = () => {
        input2.firstChild.innerHTML = input2Html.value
    }
    const updateDiff = () => {
        output.innerHTML = ''
        output.appendChild(
            visualDomDiff(input1.firstChild, input2.firstChild, {
                ignoreCase: ignoreCaseCheckbox.checked
            })
        )
        outputHtml.value = output.innerHTML
    }

    input1Html.addEventListener('input', () => {
        updateInput1()
        updateDiff()
    })
    input2Html.addEventListener('input', () => {
        updateInput2()
        updateDiff()
    })
    ignoreCaseCheckbox.addEventListener('change', () => {
        updateDiff()
    })
    updateInput1()
    updateInput2()
    updateDiff()
})
