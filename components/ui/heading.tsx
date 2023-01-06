type Level = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type Weight = 'bold' | 'semibold' | 'medium' | 'normal' | 'light';

const Heading = ({
	level,
	weight,
	children,
	className
}: {
	level?: Level;
	weight?: Weight;
	children: React.ReactNode;
	className?: string;
}) => {
	weight = weight ?? 'normal';

	switch (level) {
		case 'h1':
			return <h1 className={`text-5xl text-gray-800 font-${weight} leading-relaxed ${className}`}>{children}</h1>;
		case 'h2':
			return <h2 className={`text-3xl text-gray-800 font-${weight} leading-relaxed ${className}`}>{children}</h2>;
		case 'h3':
			return <h3 className={`text-xl text-gray-800 font-${weight} leading-relaxed ${className}`}>{children}</h3>;
		case 'h4':
			return <h4 className={`text-lg text-gray-800 font-${weight} leading-relaxed ${className}`}>{children}</h4>;
		case 'h5':
			return (
				<h5 className={`text-base text-gray-800 font-${weight} leading-relaxed ${className}`}>{children}</h5>
			);
		case 'h6':
			return (
				<h6 className={`text-base text-gray-800 font-${weight} leading-relaxed ${className}`}>{children}</h6>
			);
		default:
			return <h2 className={`text-2xl text-gray-800 font-${weight} leading-relaxed ${className}`}>{children}</h2>;
	}
};

export default Heading;
