<div>
<p>Using your code from the previous task, in <code>task_1/dashboard/src/utils.js</code>:</p>
<ol>
<li>Create a function named <code>getFullYear</code> that will return the current year</li>
<li>Create a function named <code>getFooterCopy</code>:
<ul>
<li>It accepts one argument <code>isIndex</code> (boolean). When true, the function should return <em>Holberton School</em>. When false, the function should return <em>Holberton School main dashboard</em></li>
</ul>
</li>
<li>Modify the footer returned in <code>task_1/dashboard/src/App.js</code> to use these two functions</li>
</ol>
</div>

<div>
<p>In <code>task_1/dashboard/src/Notifications.js</code>, create a Notifications element:</p>
<ol>
<li>It should import React</li>
<li>It should export a function</li>
<li>The function should return a <code>div</code> with the class <code>Notifications</code></li>
<li>The <code>div</code> should contain a <code>paragraph</code> with the text <em>Here is the list of notifications</em></li>
</ol>
<p>Import the file <code>Notifications.css</code>.</p>
</div>

<div>
<p>In <code>task_1/dashboard/src/Notifications.css</code>, style the Notifications class:</p>
<ul>
<li>Add a border and some padding around the <code>div</code></li>
</ul>
</div>

<div>
<p>Render the Notifications element:</p>
<ol>
<li>Modify <code>task_1/dashboard/src/index.js</code> to render the new element (<code>Notifications</code>) in a <code>div</code> named <em>root-notifications</em></li>
<li>Check that you can see the two elements on the browser, and using the React browser extension</li>
</ol>
</div>

<div>
<p>Requirements:</p>
<ul>
<li>When running, there should not be any lint error in the console</li>
</ul>
