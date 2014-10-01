<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Din guide till svenska matsvampar på nätet">
    <meta name="author" content="">
    <title>@yield('title','Responsive Site Tester')</title>
    <link rel="icon" href="favicon.ico">
    <link rel="stylesheet" href="{{ URL::asset('less/css/bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ URL::asset('less/css/bootstrap-theme.min.css') }}">
    <script src="{{ URL::asset('js/min/jquery.min.js') }}"></script>
    <script src="{{ URL::asset('js/min/bootstrap.min.js') }}"></script>
</head>
<body>
<div class="wrap">
    <header class="page-header">
        <div class="container">
            @yield('header')
        </div>
    </header>

    <div class="container">
        @yield('content')
    </div>
</div>

<footer>
    <div class="container">
        <div class="row text-center">

            {{ date('Y'); }} &bull; modulecode.com
        </div>
    </div>
</footer>

<link rel="stylesheet" href="{{ URL::asset('less/css/resptest.min.css') }}">
<script src="{{ URL::asset('js/min/resptest.min.js') }}"></script>
</body>
</html>