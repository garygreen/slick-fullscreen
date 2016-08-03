(function(window, $) {

	var slickFullscreen = {

		namespace: 'slick-fullscreen',

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
				clonedSlides.push('<div><img src="' + slickFullscreen.getImageSource($(this)) + '"></div>');
			});

			var $container = $('<div class="slick-fullscreen">' + clonedSlides.join('') + '</div>');
			
			$('body').append($container);

			$container.slick(options);

			$container.find('.slick-track').on('click.' + this.namespace, '.slick-slide img', function(event) {
				event.stopPropagation();
				$container.slick('slickNext');
			});

			$container.find('.slick-track').on('click.' + this.namespace, function() {
				slickFullscreen.close();
			});

			$(document).on('keyup.' + this.namespace, function(event) {

				// Escape
				if (event.keyCode == 27) {
					slickFullscreen.close();
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
			this.unbindEvents();
			this.$container.slick('unslick');
			this.$container.remove();			
		},

		/**
		 * Unbind events.
		 *
		 * @return {void}
		 */
		unbindEvents: function() {
			$(document).off('.' + this.namespace);
			this.$container.find('.slick-track').off('.' + this.namespace);
		}

	};

	$('[data-slick-fullscreen]').each(function() {
		var options = $(this).data('slick-fullscreen') || {};
		var $targets = $(options.fullscreenTarget || 'a', this);

		$targets.on('click', function(event) {
			event.preventDefault();
			slickFullscreen.open($targets, $.extend({}, options, { initialSlide: $(this).index() }));
		});
	});

	window.slickFullscreen = slickFullscreen;

})(window, jQuery);
