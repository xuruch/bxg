
<ul>
    <% _.each(data, function(n){ %>
    <li>姓名：<%= n.name %>,年龄：<%= n.age %>,性别：<%= n.sex %></li>
<% }); %>
</ul>