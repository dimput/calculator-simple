
$(document).ready(function () {

    var result = 0;
    var stack = []
    var operasi = ""
    $(".plus").click(function () {
        if (stack.length === 0) {
            stack.push($(".input").val())
            stack.push('+')
            result=$(".input").val()
        }
        else {
            if (operasi !== '+') {
                stack.pop()
                stack.push('+')
                if (result === 0) {
                    result = $(".input").val()
                    $(".input").val("")
                } else {
                    $(".input").val("")
                }
            }
            else {
                stack.push($(".input").val())
                stack.push('+')
                if (result === 0) {
                    result = $(".input").val()
                    $(".input").val("")
                } else {
                    result = parseFloat(result) + parseFloat($(".input").val())
                    $(".input").val(result)
                }
            }
        }
        operasi = "+"
        $(".input").focus()
        $(".result").html(stack.join(" "))
    });
    $(".minus").click(function () {
        if (stack.length === 0) {
            stack.push($(".input").val())
            stack.push('-')
            result=$(".input").val()
        }
        else {
            if (operasi !== '-') {
                stack.pop()
                stack.push('-')
                if (result === 0) {
                    result = $(".input").val()
                    $(".input").val("")
                } else {
                    $(".input").val("")
                }
            } else {
                stack.push($(".input").val())
                stack.push('-')
                if (result === 0) {
                    result = $(".input").val()
                    $(".input").val("")
                } else {
                    result = parseFloat(result) - parseFloat($(".input").val())
                    $(".input").val(result)
                }
            }
        }
        operasi = "-"
        
        $(".input").focus()
        $(".result").html(stack.join(" "))
    });
    $(".kali").click(function () {
        if (stack.length === 0) {
            stack.push($(".input").val())
            stack.push('x')
            result=$(".input").val()
        }
        else {
            if (operasi !== '*') {
                stack.pop()
                stack.push('x')
                if (result === 0) {
                    result = $(".input").val()
                    $(".input").val("")
                } else {
                    $(".input").val("")
                }
            } else {
                stack.push($(".input").val())
                stack.push('x')
                if (result === 0) {
                    result = $(".input").val()
                    $(".input").val("")
                } else {
                    result = parseFloat(result) * parseFloat($(".input").val())
                    $(".input").val(result)
                }
            }
        }
        operasi = "*"
        
        $(".input").focus()
        $(".result").html(stack.join(" "))
    });
    $(".bagi").click(function () {
        if (stack.length === 0) {
            stack.push($(".input").val())
            stack.push('/')
            result=$(".input").val()
        }
        else {
            if (operasi !== '/') {
                stack.pop()
                stack.push('/')
                if (result === 0) {
                    result = $(".input").val()
                    $(".input").val("")
                } else {
                    $(".input").val("")
                }
            } else {
                stack.push($(".input").val())
                stack.push('/')
                if (result === 0) {
                    result = $(".input").val()
                    $(".input").val("")
                } else {
                    result = parseFloat(result) / parseFloat($(".input").val())
                    $(".input").val(result)
                }
            }
        }
        operasi = "/"
        
        $(".input").focus()
        $(".result").html(stack.join(" "))
    });
    $(".samadengan").click(function () {
        if (operasi === "+") {
            stack.push($(".input").val())
            $(".result").html(stack.join(" "))
            result = parseFloat(result) + parseFloat($(".input").val())
        } else if (operasi === "-") {
            stack.push($(".input").val())
            $(".result").html(stack.join(" "))
            result = parseFloat(result) - parseFloat($(".input").val())
        } else if (operasi === "*") {
            stack.push($(".input").val())
            $(".result").html(stack.join(" "))
            result = parseFloat(result) * parseFloat($(".input").val())
        } else if (operasi === "/") {
            stack.push($(".input").val())
            $(".result").html(stack.join(" "))
            result = parseFloat(result) / parseFloat($(".input").val())
        }
        $(".input").val(result)
    });
    $(".ce").click(function () {
        result = 0
        operasi = ""
        stack = []
        $(".result").html(stack.join(" "))
        $(".input").val("")
    });
});