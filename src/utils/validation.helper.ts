export const onlyEnglishLetters = (value: string): boolean => {
     if (value === '') {
          return true;
     }
     const charactersEnglishRegex = /^[A-Za-z]+$/;
     return charactersEnglishRegex.test(value);
};
