<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-user-select:none;
  -webkit-overflow-scrolling:touch;
  width: 100%;
}
html,body,p,h1,h2,h3,h4,h5,h6,ul,ol,li,span,i,a,button,input,option,section,form {
	margin: 0;
	padding: 0;
	border: 0;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
  -webkit-text-size-adjust:none;
}
::-webkit-scrollbar {/*隐藏滚轮*/
    display: none;
}
::-webkit-scrollbar{width:0;height:1px}
::-webkit-scrollbar-thumb{border-radius:5px;-webkit-box-shadow:inset 0 0 5px rgba(0,0,0,.2);background:rgba(0,0,0,.2)}
input {
	white-space: nowrap;
}
* {
	background-repeat: no-repeat;
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
ul,li,ol {
	list-style: none;
}
img {
	border: none;
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
a {
	text-decoration: none;
	border: none;
	outline: none;
	tap-highlight-color: rgba(0, 0, 0, 0);
	focus-ring-color: rgba(0, 0, 0, 0);
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	-webkit-focus-ring-color: rgba(0, 0, 0, 0);
	-moz-tap-highlight-color: rgba(0, 0, 0, 0);
	-moz-focus-ring-color: rgba(0, 0, 0, 0);
}
a:active {
	outline: 0;
}
a:visited {
	color: inherit;
}
input,
textarea,
select,
button {
	outline: none;
	-webkit-appearance: none;
}
input::-moz-placeholder,
textarea::-moz-placeholder {
	color: #cccccc;
}
input:-ms-input-placeholder,
textarea:-ms-input-placeholder {
	color: #cccccc;
}
input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
	color: #cccccc;
}
.clearfix:after {
	content: ".";
	display: block;
	overflow: hidden;
	height: 0;
	clear: both;
	visibility: hidden;
}
/* 公共样式 */
.recommend-title{
    padding: 15px 0px 15px 15px;
    display: flex;
    justify-content: left;
  }
  .rounded-rectangle{
    display: inline-block;
    width: 4px;
    height: 16px;
    background: #ff4444;
    border-radius: 3px;
    margin-top: 3px;
  }
  .special{
    font-size: 15px;
    margin-left: 10px;
  }
</style>
