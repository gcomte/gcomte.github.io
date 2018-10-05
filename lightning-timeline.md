<style>
    body {
        background: url('https://upload.wikimedia.org/wikipedia/commons/9/93/Longhorndave_-_Lightning_2_%28by%29.jpg') no-repeat center center fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    }
    .page-header { display: none; }
    .site-footer { display: none; }
    .main-content {
        max-width:100%;
        padding: 0 0;
    }
    h1 {
        text-align: center !important;
        font-weight: bold !important;
        margin: 2.5rem 25% !important;
        color: #FEDE36 !important;
        background: rgba(0,0,0,0.5) !important;
    }
    @media only screen and (max-width: 1024px) {
        h1 {
            display:none;
        }
    }
    @media only screen and (max-width: 1380px) {
        h1 {
            font-size: 25px;
        }
    }
</style>
 

⚡ Timline of the Lightning Network ⚡
===

<!-- timeline container -->
<div id='timeline-embed' style="width: 100%; height: 600px"></div>


<!-- timeline imports -->
<link title="timeline-styles" rel="stylesheet" href="https://cdn.knightlab.com/libs/timeline3/latest/css/timeline.css">
<script src="https://cdn.knightlab.com/libs/timeline3/latest/js/timeline.js"></script>

<!-- timeline data -->
<script type="text/javascript">
    timeline = new TL.Timeline('timeline-embed', 'https://docs.google.com/spreadsheets/d/1cWqQBZCkX9GpzFtxCWHoqFXCHg-ylTVUWlnrdYMzKUI/pubhtml');
</script>


<script>
    (function(){ 
        // change page title
        document.title = 'Lightning Network Timeline';
    })();
</script>