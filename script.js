document.getElementById('timing').addEventListener('click', function() {


    let h = document.getElementById("hours");
    let m = document.getElementById("minutes");
    let s = document.getElementById("seconds");


    let s_i = parseInt(s.textContent);
    let m_i = parseInt(m.textContent);
    let h_i = parseInt(h.textContent);



    let u = setInterval(function() {

        if (s_i => 0) {
            s_i -= 1;
            s.textContent = s_i;
            if (s_i === 0) {
                clearInterval(u)
            }
        }
        if (s_i === 0) {

            let v = setInterval(function() {
                if (m_i => 0) {
                    m_i -= 1;
                    m.textContent = m_i;
                    if (m_i === 0) {
                        clearInterval(v)
                    }

                }


            }, 1000)
        }



        if (m_i === 0) {

            let x = setInterval(function() {
                if (h_i => 0) {
                    h_i -= 1;
                    h.textContent = h_i;
                    if (h_i === 0) {
                        clearInterval(x)
                    }
                }

            }, 1000)

        }

    }, 1000)





});