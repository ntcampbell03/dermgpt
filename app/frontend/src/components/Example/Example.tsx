import styles from "./Example.module.css";

interface Props {
    text: string;
    value: string;
    onClick: (value: string) => void;
}

export const Example = ({ text, value, onClick }: Props) => {
    const renderFormattedText = (text: string) => {
        // Split by asterisks and handle formatting
        const parts = text.split('*');
        const elements = [];
        
        for (let i = 0; i < parts.length; i++) {
            if (i % 2 === 0) {
                // Even indices are regular text (outside asterisks)
                if (parts[i].trim()) {
                    elements.push(
                        <span key={i} className={styles.subtext}>
                            {parts[i].trim()}
                        </span>
                    );
                }
            } else {
                // Odd indices are bold text (inside asterisks)
                if (parts[i].trim()) {
                    elements.push(
                        <span key={i} className={styles.boldText}>
                            {parts[i].trim()}
                        </span>
                    );
                }
            }
        }
        
        return elements;
    };

    return (
        <div className={styles.example} onClick={() => onClick(value)}>
            <p className={styles.exampleText}>
                {renderFormattedText(text)}
            </p>
        </div>
    );
};
