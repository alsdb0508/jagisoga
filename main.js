document.addEventListener('DOMContentLoaded', function() {
    var emailLink = document.getElementById('email-link');
    if (emailLink) {
        emailLink.addEventListener('click', function(e) {
            e.preventDefault();
            window.open(
                'https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F%3Fhl%3Dko&emr=1&hl=ko&ifkv=AdBytiPpldWGjmvyhKQ5DjkydUx7mIYBXSXknpB0PO1hv_8yXcuant8uE9fuzOydFF-WYoP70PGIWg&ltmpl=default&ltmplcache=2&osid=1&passive=true&rm=false&scc=1&service=mail&ss=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S1932983589%3A1748583183981702',
                '_blank'
            );
        });
    }
});
