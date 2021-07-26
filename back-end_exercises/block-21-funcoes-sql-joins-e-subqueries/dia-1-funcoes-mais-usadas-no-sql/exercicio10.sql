-- Escreva um query que exiba média salarial e o número de funcionários de todos os departamentos com mais de dez funcionários. Dica: agrupe pelo department_id .

SELECT DEPARTMENT_ID, AVG(SALARY) 'MEDIA_SALARIO', COUNT(*) 'QUANT_FUNCIONARIO' FROM hr.employees
GROUP BY DEPARTMENT_ID HAVING 'QUANT_FUNCIONARIO' > 10;
