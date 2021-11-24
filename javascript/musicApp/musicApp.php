<?php echo file_get_contents('https://raw.githubusercontent.com/sabrinabm/front-end-environment/master/default-files/template/header.php'); ?>
	<section class="container music-app">
		<div class="row">
			<div class="search-container">
				<form class="form" id="form">
					<h2 class="title">Album search</h2>
					<input type="text" class="input" id="input-search-name" placeholder="Enter with the artist name">
					<button class="button search" id="button-search-name">Search
						<input type="submit" class="input-submit-name hide" id="input-submit-name">
					</button>
				</form>
			</div>
			<div class="results-container hide">
				<h2 class="title artist-name" id="artist-name">Artist: Ariana Grande</h2>
				<div class="row">
					<div class="col-md-12">
						<ul class="album-list">
						</ul>
					</div>
				</div>
			</div>
			<div class="no-results-container hide">
				
			</div>
		</div>
	</section>
    <script src="musicApp.js"></script>
</body>
</html>

