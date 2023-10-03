# DSA Project - Paris Metro Project
 <p>This repository contains the final project for the Data Structures and Algorithms course at UNIVASF - Universidade do Vale do São Francisco.<br>
 It consists of an implementation of the A* search algorithm over a graph representing a simplified version of the Paris metro system.</p>

 <p>Este repositório contém o projeto final da disciplina Algoritmos e Estruturas de Dados da UNIVASF - Universidade Federal do Vale do São Francisco.<br>
 O projeto consiste na impleementação de uma variação do algoritmo de busca A* sobre um grafo representando uma versão simplificada do metrô de Paris.</p>

<br>

## Screenshots
![Main Page - Página Inicial](/screenshots/DSA-demo-1.jpg)

> Main Page - Páginal Inicial

![Final state - Estado Final](/screenshots/DSA-demo-2.jpg)

> Final App State - Estado Final da Aplicação

<br>

## About - Sobre o Projeto

   <p>The application was developed with the goal of solving the Paris Metro System Problem - Finding the path between 2 stations that would take less time.<br>
    There were available 1 map of stations and 2 tables, containing the relationj of adjacencies for stations, the distance between them and the physical distance in a straight line between all stations - The heuristic.</p>
    
   <p>A aplicação foi desenvolvida com o projeto de solucionar o problema do metrô de Paris - Encontrar o trajeto entre duas estaçõesque poderia ser realizado em menor tempo.<br>
    Foram disponibilizados 1 mapa de estações e 2 tabelas, contendo a relaões de adjacências entre estações, a distância entre elas e a distância física em linha reta entre as estações - A heurística.</p>
 
![Tables - Tabelas](/screenshots/DSA-tables.png)

<br>

## Technologies Used - Tecnologias Utilizadas

   <p>The language chosen for implementation of the algorithm was JavaScript, alongside HTML and CSS for the interface creation. It was my first experience with such tools, after a short experience with C ANSI.</p>
   
   <p>A linguagem escolhida para implementação do algoritmo foi JavaScript, em conjunto com HTML e CSS para criação de interface. Foi minha primeira experiência com essas ferramentas, vindo de uma breve experiência com C ANSI no passado.</p>

<br>

## The A* Search Algorithm - O Algoritmo de Busca A*

<p>The A* search algortihm uses both the physical distance, in a traight line, from the currently analyzed nodes and the cost of moving between them - in this case, the distance between stations through the metro system.<br>For each analyzed node, it's 'border' is expanded - in other words, it's adjacent nodes are analyzed, too - and for each node in the 'border', a cost is calculated - through the function f(n) = g(n) + h(n) - and the node with the minimum cost is selected as the next one to be analyzed, the other being discarded.
</p>
<p>For this project, an alternative version of the A* algorithm was implemented, making use of the function f(n) = g(n) + h(n) + b(n). In this version, the term 'b(n)' refers to the time needed to switch lines in a given station - exactly 4 minutes.</p>
<br>
<p>O algoritmo de busca A* utiliza tanto a distância física, em uma linha reta, dos nós atualmente analisados quanto o custo de movimentação entre eles - neste caso, a distância entre as estações do sistema de metrô.<br>Para cada nó analisado, sua 'fronteira' é expandida - ou seja, seus nós adjacentes também são analisados - e para cada nó da 'fronteira' é calculado um custo - através da função f(n) = g(n ) + h(n) - e o nó com custo mínimo é selecionado como o próximo a ser analisado, sendo o outro descartado.
</p>
<p>Para este projeto, foi implementada uma versão alterada do algoritmo A*, fazendo uso da função f(n) = g(n) + h(n) + b(n). Nesta versão, o termo 'b(n)' refere-se ao tempo de troca de linhas em um determinada estação - 4 minutos.</p>

## Extra Information - Extra

<p>For a more detailed presentation, containing all details about the project, can be seen (IN PORTUGUESE) <a href="https://docs.google.com/presentation/d/1P7oxxeQK1bHfUVMWG2B5F1Z9dAdXVDTllPrKBmB-rj8/edit?usp=sharing">here</a>.</p>
<p>Uma apresentação mais detalhada de todas as informações pode ser vista <a href="https://docs.google.com/presentation/d/1P7oxxeQK1bHfUVMWG2B5F1Z9dAdXVDTllPrKBmB-rj8/edit?usp=sharing">aqui</a>.</p>
