(function($) {

	var fullscreenSlick = {

		/**
		 * Open full screen slick slider.
		 *
		 * @param  {jQuery} $slides
		 * @param  {object} options
		 * @return {void}
		 */
		open: function($slides, options) {

			// Create new versions of the slides.
			var clonedSlides = [];
			$slides.each(function() {
				clonedSlides.push('<div><img src="' + fullscreenSlick.getImageSource($(this)) + '"></div>');
			});

			var $container = $('<div class="slick-fullscreen">' + clonedSlides.join('') + '</div>');
			
			$('body').append($container);

			$container.slick(options);

			$container.find('.slick-track').on('click', '.slick-slide img', function(event) {
				event.stopPropagation();
				$container.slick('slickNext');
			});

			$container.find('.slick-track').on('click', function() {
				fullscreenSlick.close();
			});

			$(document).on('keyup', function(event) {

				// Escape
				if (event.keyCode == 27) {
					fullscreenSlick.close();
				}

			});

			this.$container = $container;
		},

		/**
		 * Get the source to the image.
		 *
		 * @param  {jQuery} $element
		 * @return {string}
		 */
		getImageSource: function($element) {
			if ($element.is('img')) {
				return $element.attr('src');
			}

			return $element.attr('href');
		},

		/**
		 * Close fullscreen slick.
		 *
		 * @return {void}
		 */
		close: function() {
			this.$container.slick('unslick');
			this.$container.remove();
		}

	};

	$('[data-fullscreen-slick]').each(function() {
		var options = $(this).data('fullscreen-slick') || {};
		var $targets = $(options.fullscreenTarget || 'a', this);

		$targets.on('click', function(event) {
			event.preventDefault();
			fullscreenSlick.open($targets, $.extend({}, options, { initialSlide: $(this).index() }));
		});
	});

})(jQuery);
