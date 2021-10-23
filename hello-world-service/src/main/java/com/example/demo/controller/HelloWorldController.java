package com.example.demo.controller;

import com.example.demo.model.Person;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
public class HelloWorldController {
    private Map<Integer,Person> personMap;

    public HelloWorldController() {
      personMap=new HashMap<>();
    }

    @PostMapping("/persons")
   public Person createPerson(@RequestBody Person person)
   {
       person.setId(new Random().nextInt(1000));
       personMap.put(new Random().nextInt(1000),new Person(person.getId(),person.getFirstName(),person.getLastName(),person.getEmail()));
        System.out.println(personMap);
       return person;
   }

    @GetMapping("/persons")
    public Collection<Person> displayAllPerson()
    {
        return personMap.values();
    }
    @GetMapping("/persons/{id}")
    public Person getPersonById(@PathVariable("id") Integer id)
    {
        Person person=personMap.get(id);
        return person;
    }
    @DeleteMapping("/persons/{id}")
    public Person deletePerson(@PathVariable("id") Integer id)
    {
        Person p=personMap.remove(id);
        return p;
    }
}
